import type { DefineComponent } from 'vue';

export interface CloudSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSearch: DefineComponent<CloudSearchProps>;

export default CloudSearch;
export { CloudSearch };
