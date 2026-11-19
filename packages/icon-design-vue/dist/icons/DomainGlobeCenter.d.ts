import type { DefineComponent } from 'vue';

export interface DomainGlobeCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DomainGlobeCenter: DefineComponent<DomainGlobeCenterProps>;

export default DomainGlobeCenter;
export { DomainGlobeCenter };
