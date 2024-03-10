import { SkillProps } from "../data/data";

function Cards({ images }: SkillProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-md bg-cards p-2 text-white shadow-md duration-200 dark:bg-light md:hover:scale-110">
      <img src={images.icon} alt={images.name} className="mx-16 h-10 md:h-14" />
      <span className=" text-light dark:text-darkFont" key={images.id}>
        {images.name}
      </span>
    </div>
  );
}

export default Cards;
