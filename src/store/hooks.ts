import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePositions = () => {
	const [positions, setPositions] = useState([]);

	useEffect(() => {
		const fetchPositions = async () => {
			try {
				const { data } = await axios.get(
					'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
				);
				setPositions(data.positions);
			} catch (error) {
				console.error(error);
			}
		};

		fetchPositions();
	}, []);

	return { positions };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
