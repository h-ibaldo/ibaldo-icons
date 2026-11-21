import type { DefineComponent } from 'vue';

export interface ContactlessCardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ContactlessCard: DefineComponent<ContactlessCardProps>;

export default ContactlessCard;
export { ContactlessCard };
