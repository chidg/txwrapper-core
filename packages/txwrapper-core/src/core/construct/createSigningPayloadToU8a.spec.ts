import { u8aToHex } from '@polkadot/util';
import {
	ASTAR_TEST_BASE_TX_INFO,
	ASTAR_TEST_METHOD_ARGS,
	ASTAR_TEST_OPTIONS,
	KUSAMA_TEST_OPTIONS,
	TEST_BASE_TX_INFO,
	TEST_METHOD_ARGS,
} from '@substrate/txwrapper-dev';

import {
	balancesTransfer,
	balancesTransferKeepAlive,
} from '../../test-helpers';
import { createSigningPayloadToU8a } from './createSigningPayloadToU8a';

describe('createSigningPayloadToU8a', () => {
	it('should work', () => {
		const signingPayload = createSigningPayloadToU8a(
			balancesTransferKeepAlive(
				TEST_METHOD_ARGS.balances.transferKeepAlive,
				TEST_BASE_TX_INFO,
				KUSAMA_TEST_OPTIONS,
			),
			KUSAMA_TEST_OPTIONS,
		);

		expect(u8aToHex(signingPayload)).toEqual(
			'0x04030096074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30eb58080000758e010006000000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b58200',
		);
	});

	it('should workfor Astar', () => {
		const signingPayload = createSigningPayloadToU8a(
			balancesTransfer(
				ASTAR_TEST_METHOD_ARGS.balances.transfer,
				ASTAR_TEST_BASE_TX_INFO,
				ASTAR_TEST_OPTIONS,
			),
			ASTAR_TEST_OPTIONS,
		);

		expect(u8aToHex(signingPayload)).toEqual(
			'0x1f070046ef637afac0ffa9ec7a7cf76c5e0148200a401e2a1efcf2c16ee1554b74a22030db2a080f0000c52ebca2b148000000020000009eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c66c8453305b978e867b2ccacea94e01a4ea49dfd6eb0965b6c0ccf36b295e16b5',
		);
	});
});
