import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotWide: ForwardRefExoticComponent<ChatDotWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDotWide;
export { ChatDotWide };
