import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatRaysSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatRaysSide: ForwardRefExoticComponent<ChatRaysSideProps & RefAttributes<SVGSVGElement>>;

export default ChatRaysSide;
export { ChatRaysSide };
