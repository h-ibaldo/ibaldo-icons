import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleBroken: ForwardRefExoticComponent<ChatCheckDoubleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleBroken;
export { ChatCheckDoubleBroken };
