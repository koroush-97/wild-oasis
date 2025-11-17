// import supabase from "./supabase";

// export async function getSettings() {
//   const { data, error } = await supabase.from("settings").select("*").single();

//   if (error) {
//     console.error(error);
//     throw new Error("Settings could not be loaded");
//   }
//   return data;
// }

// // We expect a newSetting object that looks like {setting: newValue}
// export async function updateSetting(newSetting) {
//   const { data, error } = await supabase
//     .from("settings")
//     .update(newSetting)
//     // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
//     .eq("id", 1)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error("Settings could not be updated");
//   }
//   return data;
// }
import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error("getSettings error:", error);
    throw new Error("Settings could not be loaded");
  }
  console.log("getSettings data:", data);
  return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  console.log("updateSetting called with:", newSetting);

  if (!newSetting || Object.keys(newSetting).length === 0) {
    console.warn("updateSetting called with empty object, skipping update");
    return;
  }

  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  console.log("Supabase response - data:", data, "error:", error);

  if (error) {
    console.error("updateSetting error:", error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
