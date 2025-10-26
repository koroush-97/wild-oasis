import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins coild not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase
    .from("cabins")
    .delete()
    .eq("some_column", "someValue");
}
