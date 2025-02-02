package keychain

import (
	"log/slog"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// Config is the configuration for the Keychain.
type Config struct {
	// Logger is the logger to use for the Keychain.
	// If nil, no logging will be done.
	Logger *slog.Logger

	// ChainID is the chain ID of the chain to connect to.
	ChainID string

	// GRPCURL is the URL of the gRPC server to connect to.
	// e.g. "localhost:9090"
	GRPCURL string

	// GRPCInsecure determines whether to allow an insecure connection to the
	// gRPC server.
	GRPCInsecure bool

	// KeychainID is the ID of the keychain this instance will fetch requests
	// for.
	KeychainID uint64

	// DerivationPath is the derivation path to use in combination with the
	// [Mnemonic] to derive this Keychain's writer private key.
	// e.g. "m/44'/60'/0'/0/0"
	DerivationPath string

	// Mnemonic is the mnemonic to use to derive this Keychain's writer private
	// key.
	Mnemonic string

	// BatchInterval is the time to wait before sending a batch of requests to
	// the blockchain. Tipically, this interval should be set to the average
	// block time of the chain.
	BatchInterval time.Duration

	// BatchSize is the maximum number of requests to batch together before
	// sending them to the blockchain.
	BatchSize int

	// GasLimit is the maximum amount of gas to use for each transaction.
	//
	// This value is tied to [BatchSize], as the more messages in a batch, the
	// more gas is needed.
	GasLimit uint64

	// TxFees are the coins used as fees for the outgoing transactions of this
	// Keychain.
	TxFees sdk.Coins

	// TxTimeout is the amount of time to wait for a transaction to be included
	// in a block after having broadcasted it.
	//
	// If the transaction isn't included in a block, it will be considered as
	// failed (but the blockchain might still include in a block later).
	TxTimeout time.Duration
}
