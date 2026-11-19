import type { DefineComponent } from 'vue';

export interface WindowOverlapRightListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRightList: DefineComponent<WindowOverlapRightListProps>;

export default WindowOverlapRightList;
export { WindowOverlapRightList };
