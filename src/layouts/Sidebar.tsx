import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  Home,
  Library,
  Lightbulb,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
  History,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "../components/Button";
export default () => {
  return (
    <>
      <aside className="sticky top-0 flex flex-col pb-4 ml-1 overflow-y-auto scrollbar-hidden lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="absolute top-0 flex flex-col w-56 gap-2 px-2 pb-4 overflow-y-auto lg:sticky scrollbar-hidden">
        <LargeSidebarSection visibleItemCount={3}>
          <LargeSidebarItem Icon={Home} title="Home" url="/" isActive />
          <LargeSidebarItem
            Icon={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem Icon={Library} title="Library" url="/library" />
          <LargeSidebarItem Icon={History} title="History" url="/history" />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {/* {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))} */}
        </LargeSidebarSection>
        <hr />
        {/* <LargeSidebarSection title="Subscriptions">
          {subscriptions.map(subscription => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection> */}
        {/* <hr /> */}
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem Icon={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
          <LargeSidebarItem Icon={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
          <LargeSidebarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSidebarItem Icon={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem Icon={Lightbulb} title="Learning" url="/learning" />
          <LargeSidebarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem Icon={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSidebarSection>
      </aside>
    </>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};
type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-small">{title}</div>
    </a>
  );
};

const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState();
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.splice(0, visibleItemCount);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="mt-2 mb-1 ml-4 text-lg">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="flex items-center w-full gap-4 p-3 rounded-lg"
        >
          <ButtonIcon className="w-6 h-6" />
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

const LargeSidebarItem = ({
  title,
  Icon,
  url,
  isActive,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </div>
    </a>
  );
};
