import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextRaysSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextRaysSide: ForwardRefExoticComponent<ChatTextRaysSideProps & RefAttributes<SVGSVGElement>>;

export default ChatTextRaysSide;
export { ChatTextRaysSide };
