import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerBroken: ForwardRefExoticComponent<ChatCheckCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerBroken;
export { ChatCheckCornerBroken };
