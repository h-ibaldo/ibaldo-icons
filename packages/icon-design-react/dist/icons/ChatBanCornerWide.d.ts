import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanCornerWide: ForwardRefExoticComponent<ChatBanCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatBanCornerWide;
export { ChatBanCornerWide };
