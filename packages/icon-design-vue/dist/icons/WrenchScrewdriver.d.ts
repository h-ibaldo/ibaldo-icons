import type { DefineComponent } from 'vue';

export interface WrenchScrewdriverProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchScrewdriver: DefineComponent<WrenchScrewdriverProps>;

export default WrenchScrewdriver;
export { WrenchScrewdriver };
