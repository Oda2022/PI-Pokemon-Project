import React from "react";
import s from "./Paginated.module.css";

const Paginated = ({ pageNumber, amountPerPage, totalAmount, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
		pageNumbers.push(i);
	}

	const prevHandler = () => {
		if (currentPage <= 1) return;
		pageNumber(currentPage - 1);
	};
	const nextHandler = () => {
		if (currentPage >= pageNumbers.length) return;
		pageNumber(currentPage + 1);
	};

	return (
		<div className={s.paginatedContainer}>
			<div>
				<button className={s.currentButton} onClick={() => prevHandler()}>
					Prev
				</button>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<button
								key={num}
								className={
									currentPage === num ? s.buttonActive : s.numberButton
								}
								onClick={() => pageNumber(num)}
							>
								{num}
							</button>
						);
					})}
				<button className={s.currentButton} onClick={() => nextHandler()}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Paginated;
