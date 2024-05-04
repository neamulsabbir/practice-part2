"use client";
import Image from "next/image";
import { FacebookShare, TelegramShare, TwitterShare, WhatsappShare } from "react-share-kit";
import cross from "../../public/assets/images/bg_cross.png";

const SocialShare = ({ onClose, socialUrl, name }) => {
	return (
		<div className="flex flex-col w-full bg-white shadow-2xl rounded-lg" onClick={() => onClose()}>
			<div className="flex justify-end  p-2">
				<Image src={cross} width={20} height={20} alt="" onClick={() => onClose()} className="self-end " />
			</div>
			<div className="flex justify-end space-x-4 p-6">
				<FacebookShare url={socialUrl} round quote={name} size={30} />
				<TwitterShare url={socialUrl} round quote={name} size={30} />
				<WhatsappShare url={socialUrl} round quote={name} size={30} />
				<TelegramShare url={socialUrl} round quote={name} size={30} />
			</div>
		</div>
	);
};

export default SocialShare;
