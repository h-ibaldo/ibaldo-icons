import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSettingsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSettingsWide: ForwardRefExoticComponent<ChatSettingsWideProps & RefAttributes<SVGSVGElement>>;

export default ChatSettingsWide;
export { ChatSettingsWide };
