import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoWide: ForwardRefExoticComponent<ChatVideoWideProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoWide;
export { ChatVideoWide };
