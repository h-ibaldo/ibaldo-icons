import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextLargeSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextLargeSide: ForwardRefExoticComponent<ChatTextLargeSideProps & RefAttributes<SVGSVGElement>>;

export default ChatTextLargeSide;
export { ChatTextLargeSide };
