import format from "date-fns/format";

export default function formatCreatedAt(data: number) {
  return format(data, "dd/MM/yyyy mm:hh");
}
