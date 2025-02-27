import { supabase as supabaseClient } from "./supabase/client";
import { createClient } from "./supabase/server";
export const client = async () => {
  const { data: dataProvider } = await supabaseClient.auth.getUser();
  try {
    const { data: dataUser } = await supabaseClient
      .from("profiles")
      .select()
      .eq("user_id", dataProvider?.user?.id)
      .single();
    console.log(dataUser);
    if (dataProvider.user) {
      dataProvider.user.user_metadata.user_name = dataUser?.username;
      dataProvider.user.user_metadata.avatar_url = dataUser?.profile_images;
    }
    return dataProvider;
  } catch (error) {
    console.log(error);
    return dataProvider;
  }
};

export const server = async () => {
  const supabaseServer = await createClient();
  const { data: dataProvider } = await supabaseServer.auth.getUser();
  try {
    const { data: dataUser } = await supabaseServer
      .from("profiles")
      .select()
      .eq("user_id", dataProvider?.user?.id)
      .single();

    if (dataProvider.user) {
      dataProvider.user.user_metadata.user_name = dataUser?.username;
      dataProvider.user.user_metadata.avatar_url = dataUser?.profile_images;
    }

    return dataProvider;
  } catch (error) {
    console.log(error);
    return dataProvider;
  }
};
