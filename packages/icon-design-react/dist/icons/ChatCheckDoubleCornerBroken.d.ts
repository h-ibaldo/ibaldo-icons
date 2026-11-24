import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerBroken: ForwardRefExoticComponent<ChatCheckDoubleCornerBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerBroken;
export { ChatCheckDoubleCornerBroken };
