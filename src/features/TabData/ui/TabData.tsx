import { CommentsTab, MentionsTab, PhotoTab, VideoTab } from "@/features";
import Comments from "@/shared/assets/Tabs/Comments.svg?react";
import Mentions from "@/shared/assets/Tabs/Mentions.svg?react";
import Photos from "@/shared/assets/Tabs/Photos.svg?react";
import Videos from "@/shared/assets/Tabs/Videos.svg?react";
import { TabType } from "@/shared/Tabs/interface/TabType.ts";

export const tabs: TabType[] = [
  {
    title: <Photos />,
    key: 0,
    content: <PhotoTab />,
  },
  {
    title: <Videos />,
    key: 1,
    content: <VideoTab />,
  },
  {
    title: <Comments />,
    key: 2,
    content: <CommentsTab />,
  },
  {
    title: <Mentions />,
    key: 3,
    content: <MentionsTab />,
  },
];
