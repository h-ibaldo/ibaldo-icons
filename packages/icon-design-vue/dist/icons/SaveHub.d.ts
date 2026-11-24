import type { DefineComponent } from 'vue';

export interface SaveHubProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveHub: DefineComponent<SaveHubProps>;

export default SaveHub;
export { SaveHub };
