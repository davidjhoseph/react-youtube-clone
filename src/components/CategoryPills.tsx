import Button from "./Button";
type CategoryPillsProp = { categories: string[] };
export default ({ categories }: CategoryPillsProp) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((c: string) => {
          return (
            <Button
              className="py-1 px-3 rounded-lg whitespace-nowrap"
              variant={c === "All" ? "dark" : "default"}
              key={c}
            >
              {c}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
