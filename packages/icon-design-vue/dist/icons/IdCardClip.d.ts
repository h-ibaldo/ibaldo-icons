import type { DefineComponent } from 'vue';

export interface IdCardClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const IdCardClip: DefineComponent<IdCardClipProps>;

export default IdCardClip;
export { IdCardClip };
