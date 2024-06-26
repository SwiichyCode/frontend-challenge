import { useState, useTransition } from "react";
import { ButtonSubmit } from "@/core/views/components/ui/button-submit";
import { Typography } from "@/core/views/components/typography";
import { downloadFileAction } from "@/core/views/actions/challenge/download-file";
import { FILE_TYPE } from "@/config/constants";

type Props = {
  challengeId: string;
  starter_figma_path_file: string;
};

export const DownloadDesignFileForm = ({ challengeId }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      const payload = await downloadFileAction({
        challengeId,
        fileType: FILE_TYPE.FIGMA,
      });

      if (payload.serverError) {
        setErrorMessage(payload.serverError);
        return;
      }

      if (!payload.data) {
        setErrorMessage("An error occurred");
        return;
      }

      window.location.href = payload.data;
    });
  }

  return (
    <form action={handleSubmit}>
      <ButtonSubmit isPending={isPending}>Figma</ButtonSubmit>
      {errorMessage && <Typography.Error>{errorMessage}</Typography.Error>}
    </form>
  );
};
