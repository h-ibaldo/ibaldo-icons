import type { DefineComponent } from 'vue';

export interface WrenchScrewdriverDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchScrewdriverDouble: DefineComponent<WrenchScrewdriverDoubleProps>;

export default WrenchScrewdriverDouble;
export { WrenchScrewdriverDouble };
