import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlertWide: ForwardRefExoticComponent<ChatAlertWideProps & RefAttributes<SVGSVGElement>>;

export default ChatAlertWide;
export { ChatAlertWide };
