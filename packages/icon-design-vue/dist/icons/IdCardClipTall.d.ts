import type { DefineComponent } from 'vue';

export interface IdCardClipTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const IdCardClipTall: DefineComponent<IdCardClipTallProps>;

export default IdCardClipTall;
export { IdCardClipTall };
