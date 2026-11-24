import type { DefineComponent } from 'vue';

export interface SaveBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveBan: DefineComponent<SaveBanProps>;

export default SaveBan;
export { SaveBan };
