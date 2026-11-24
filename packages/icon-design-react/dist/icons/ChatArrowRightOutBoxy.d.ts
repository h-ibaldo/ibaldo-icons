import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatArrowRightOutBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatArrowRightOutBoxy: ForwardRefExoticComponent<ChatArrowRightOutBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatArrowRightOutBoxy;
export { ChatArrowRightOutBoxy };
