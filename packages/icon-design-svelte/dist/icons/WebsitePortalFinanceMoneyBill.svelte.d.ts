import { SvelteComponent } from 'svelte';

export interface WebsitePortalFinanceMoneyBillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalFinanceMoneyBill extends SvelteComponent<WebsitePortalFinanceMoneyBillProps> {}
