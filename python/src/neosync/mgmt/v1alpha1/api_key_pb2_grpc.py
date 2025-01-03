# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from mgmt.v1alpha1 import api_key_pb2 as mgmt_dot_v1alpha1_dot_api__key__pb2


class ApiKeyServiceStub(object):
    """Service that manages the lifecycle of API Keys that are associated with a specific Account.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetAccountApiKeys = channel.unary_unary(
                '/mgmt.v1alpha1.ApiKeyService/GetAccountApiKeys',
                request_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysResponse.FromString,
                _registered_method=True)
        self.GetAccountApiKey = channel.unary_unary(
                '/mgmt.v1alpha1.ApiKeyService/GetAccountApiKey',
                request_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyResponse.FromString,
                _registered_method=True)
        self.CreateAccountApiKey = channel.unary_unary(
                '/mgmt.v1alpha1.ApiKeyService/CreateAccountApiKey',
                request_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyResponse.FromString,
                _registered_method=True)
        self.RegenerateAccountApiKey = channel.unary_unary(
                '/mgmt.v1alpha1.ApiKeyService/RegenerateAccountApiKey',
                request_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyResponse.FromString,
                _registered_method=True)
        self.DeleteAccountApiKey = channel.unary_unary(
                '/mgmt.v1alpha1.ApiKeyService/DeleteAccountApiKey',
                request_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyRequest.SerializeToString,
                response_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyResponse.FromString,
                _registered_method=True)


class ApiKeyServiceServicer(object):
    """Service that manages the lifecycle of API Keys that are associated with a specific Account.
    """

    def GetAccountApiKeys(self, request, context):
        """Retrieves a list of Account API Keys
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAccountApiKey(self, request, context):
        """Retrieves a single API Key
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateAccountApiKey(self, request, context):
        """Creates a single API Key
        This method will return the decrypted contents of the API key
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RegenerateAccountApiKey(self, request, context):
        """Regenerates a single API Key with a new expiration time
        This method will return the decrypted contents of the API key
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteAccountApiKey(self, request, context):
        """Deletes an API Key from the system.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ApiKeyServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetAccountApiKeys': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAccountApiKeys,
                    request_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysResponse.SerializeToString,
            ),
            'GetAccountApiKey': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAccountApiKey,
                    request_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyResponse.SerializeToString,
            ),
            'CreateAccountApiKey': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateAccountApiKey,
                    request_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyResponse.SerializeToString,
            ),
            'RegenerateAccountApiKey': grpc.unary_unary_rpc_method_handler(
                    servicer.RegenerateAccountApiKey,
                    request_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyResponse.SerializeToString,
            ),
            'DeleteAccountApiKey': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteAccountApiKey,
                    request_deserializer=mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyRequest.FromString,
                    response_serializer=mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'mgmt.v1alpha1.ApiKeyService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('mgmt.v1alpha1.ApiKeyService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class ApiKeyService(object):
    """Service that manages the lifecycle of API Keys that are associated with a specific Account.
    """

    @staticmethod
    def GetAccountApiKeys(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.ApiKeyService/GetAccountApiKeys',
            mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeysResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def GetAccountApiKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.ApiKeyService/GetAccountApiKey',
            mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_api__key__pb2.GetAccountApiKeyResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CreateAccountApiKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.ApiKeyService/CreateAccountApiKey',
            mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_api__key__pb2.CreateAccountApiKeyResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def RegenerateAccountApiKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.ApiKeyService/RegenerateAccountApiKey',
            mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_api__key__pb2.RegenerateAccountApiKeyResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteAccountApiKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/mgmt.v1alpha1.ApiKeyService/DeleteAccountApiKey',
            mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyRequest.SerializeToString,
            mgmt_dot_v1alpha1_dot_api__key__pb2.DeleteAccountApiKeyResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
