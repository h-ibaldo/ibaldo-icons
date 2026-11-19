import type { DefineComponent } from 'vue';

export interface CheckBoldOrganicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckBoldOrganic: DefineComponent<CheckBoldOrganicProps>;

export default CheckBoldOrganic;
export { CheckBoldOrganic };
