import type { DefineComponent } from 'vue';

export interface DomainGlobeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DomainGlobe: DefineComponent<DomainGlobeProps>;

export default DomainGlobe;
export { DomainGlobe };
