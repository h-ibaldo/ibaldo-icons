import type { DefineComponent } from 'vue';

export interface DomainSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DomainSearch: DefineComponent<DomainSearchProps>;

export default DomainSearch;
export { DomainSearch };
