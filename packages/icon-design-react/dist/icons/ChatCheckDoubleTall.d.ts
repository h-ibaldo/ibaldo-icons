import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleTall: ForwardRefExoticComponent<ChatCheckDoubleTallProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleTall;
export { ChatCheckDoubleTall };
