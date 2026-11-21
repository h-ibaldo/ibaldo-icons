import type { DefineComponent } from 'vue';

export interface RssProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Rss: DefineComponent<RssProps>;

export default Rss;
export { Rss };
