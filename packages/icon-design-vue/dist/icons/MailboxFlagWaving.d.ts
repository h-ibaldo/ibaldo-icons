import type { DefineComponent } from 'vue';

export interface MailboxFlagWavingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxFlagWaving: DefineComponent<MailboxFlagWavingProps>;

export default MailboxFlagWaving;
export { MailboxFlagWaving };
