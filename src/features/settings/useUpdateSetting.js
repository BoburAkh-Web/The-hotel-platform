import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { mutate: updateSetting, isLoading: isUpdateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdateSetting, updateSetting };
}

export default useUpdateSetting;
