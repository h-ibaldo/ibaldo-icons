import type { DefineComponent } from 'vue';

export interface SupportProfileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SupportProfile: DefineComponent<SupportProfileProps>;

export default SupportProfile;
export { SupportProfile };
