import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,

  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
      <Link href='/' className='bank-card'>
        <div className='bank-card_content'>
          <div>
            <h1 className='text-16 font-semibold text-white'>
              {account.name || "userName"}
            </h1>
            <p className='font-ibm-plex-serif font-black text-white'>
              {formatAmount(
                account.currentBalance
              )}
            </p>
          </div>

          <article className='flex fle-col gap-2 '>
            <div className='flex justify-between '>
              <h1 className='text-12 font-semibold text-white'>
                {userName}
              </h1>
              <h2 className='text-12 font-semibold text-white'>
                ●● / ●●
              </h2>
              <p className='text-14 font-semibold text-white tracking-[1.1px]'>
                ●●●● ●●●● ●●●●{" "}
                <span className='text-16'>
                  1234
                </span>
              </p>
            </div>
          </article>

          <div className='bank-card-icon'>
            <Image
              src='/icons/paypass.svg'
              width={25}
              height={25}
              alt='pay'
            />

            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={45}
              alt='mastercard'
              className='ml-5'
            />
          </div>

          <Image
            src='/icons/lines.svg'
            width={316}
            height={198}
            alt='lines'
            className='absolute top-0 left-0'
          />
        </div>
      </Link>

      {/* copy */}
    </div>
  );
};

export default BankCard;
