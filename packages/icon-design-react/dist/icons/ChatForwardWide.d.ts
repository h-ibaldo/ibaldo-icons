import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardWide: ForwardRefExoticComponent<ChatForwardWideProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardWide;
export { ChatForwardWide };
