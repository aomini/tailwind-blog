import Link from 'next/link'
export const FooterCard = (props) => {
    return (
        <div className="mx-3 text-black dark:text-white">
            <h3 className="text-xl font-medium ">{props.footerCardTitle}</h3>
            <div className="my-4">
                {props.MenuLink}
            </div>


        </div>
    )
}
