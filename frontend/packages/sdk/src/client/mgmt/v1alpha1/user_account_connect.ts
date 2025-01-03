// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts,import_extension=.js"
// @generated from file mgmt/v1alpha1/user_account.proto (package mgmt.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AcceptTeamAccountInviteRequest, AcceptTeamAccountInviteResponse, ConvertPersonalToTeamAccountRequest, ConvertPersonalToTeamAccountResponse, CreateTeamAccountRequest, CreateTeamAccountResponse, GetAccountBillingCheckoutSessionRequest, GetAccountBillingCheckoutSessionResponse, GetAccountBillingPortalSessionRequest, GetAccountBillingPortalSessionResponse, GetAccountOnboardingConfigRequest, GetAccountOnboardingConfigResponse, GetAccountStatusRequest, GetAccountStatusResponse, GetAccountTemporalConfigRequest, GetAccountTemporalConfigResponse, GetBillingAccountsRequest, GetBillingAccountsResponse, GetSystemInformationRequest, GetSystemInformationResponse, GetTeamAccountInvitesRequest, GetTeamAccountInvitesResponse, GetTeamAccountMembersRequest, GetTeamAccountMembersResponse, GetUserAccountsRequest, GetUserAccountsResponse, GetUserRequest, GetUserResponse, InviteUserToTeamAccountRequest, InviteUserToTeamAccountResponse, IsAccountStatusValidRequest, IsAccountStatusValidResponse, IsUserInAccountRequest, IsUserInAccountResponse, RemoveTeamAccountInviteRequest, RemoveTeamAccountInviteResponse, RemoveTeamAccountMemberRequest, RemoveTeamAccountMemberResponse, SetAccountOnboardingConfigRequest, SetAccountOnboardingConfigResponse, SetAccountTemporalConfigRequest, SetAccountTemporalConfigResponse, SetBillingMeterEventRequest, SetBillingMeterEventResponse, SetPersonalAccountRequest, SetPersonalAccountResponse, SetUserRequest, SetUserResponse, SetUserRoleRequest, SetUserRoleResponse } from "./user_account_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service mgmt.v1alpha1.UserAccountService
 */
export const UserAccountService = {
  typeName: "mgmt.v1alpha1.UserAccountService",
  methods: {
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetUser
     */
    getUser: {
      name: "GetUser",
      I: GetUserRequest,
      O: GetUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetUser
     */
    setUser: {
      name: "SetUser",
      I: SetUserRequest,
      O: SetUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetUserAccounts
     */
    getUserAccounts: {
      name: "GetUserAccounts",
      I: GetUserAccountsRequest,
      O: GetUserAccountsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetPersonalAccount
     */
    setPersonalAccount: {
      name: "SetPersonalAccount",
      I: SetPersonalAccountRequest,
      O: SetPersonalAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Convert a personal account to a team account retaining all of the jobs and connections. This will also create a new empty personal account.
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.ConvertPersonalToTeamAccount
     */
    convertPersonalToTeamAccount: {
      name: "ConvertPersonalToTeamAccount",
      I: ConvertPersonalToTeamAccountRequest,
      O: ConvertPersonalToTeamAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new team account
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.CreateTeamAccount
     */
    createTeamAccount: {
      name: "CreateTeamAccount",
      I: CreateTeamAccountRequest,
      O: CreateTeamAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.IsUserInAccount
     */
    isUserInAccount: {
      name: "IsUserInAccount",
      I: IsUserInAccountRequest,
      O: IsUserInAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetAccountTemporalConfig
     */
    getAccountTemporalConfig: {
      name: "GetAccountTemporalConfig",
      I: GetAccountTemporalConfigRequest,
      O: GetAccountTemporalConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetAccountTemporalConfig
     */
    setAccountTemporalConfig: {
      name: "SetAccountTemporalConfig",
      I: SetAccountTemporalConfigRequest,
      O: SetAccountTemporalConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetTeamAccountMembers
     */
    getTeamAccountMembers: {
      name: "GetTeamAccountMembers",
      I: GetTeamAccountMembersRequest,
      O: GetTeamAccountMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.RemoveTeamAccountMember
     */
    removeTeamAccountMember: {
      name: "RemoveTeamAccountMember",
      I: RemoveTeamAccountMemberRequest,
      O: RemoveTeamAccountMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.InviteUserToTeamAccount
     */
    inviteUserToTeamAccount: {
      name: "InviteUserToTeamAccount",
      I: InviteUserToTeamAccountRequest,
      O: InviteUserToTeamAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetTeamAccountInvites
     */
    getTeamAccountInvites: {
      name: "GetTeamAccountInvites",
      I: GetTeamAccountInvitesRequest,
      O: GetTeamAccountInvitesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.RemoveTeamAccountInvite
     */
    removeTeamAccountInvite: {
      name: "RemoveTeamAccountInvite",
      I: RemoveTeamAccountInviteRequest,
      O: RemoveTeamAccountInviteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.AcceptTeamAccountInvite
     */
    acceptTeamAccountInvite: {
      name: "AcceptTeamAccountInvite",
      I: AcceptTeamAccountInviteRequest,
      O: AcceptTeamAccountInviteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetSystemInformation
     */
    getSystemInformation: {
      name: "GetSystemInformation",
      I: GetSystemInformationRequest,
      O: GetSystemInformationResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetAccountOnboardingConfig
     */
    getAccountOnboardingConfig: {
      name: "GetAccountOnboardingConfig",
      I: GetAccountOnboardingConfigRequest,
      O: GetAccountOnboardingConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetAccountOnboardingConfig
     */
    setAccountOnboardingConfig: {
      name: "SetAccountOnboardingConfig",
      I: SetAccountOnboardingConfigRequest,
      O: SetAccountOnboardingConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns different metrics on the account status for the active billing period
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetAccountStatus
     */
    getAccountStatus: {
      name: "GetAccountStatus",
      I: GetAccountStatusRequest,
      O: GetAccountStatusResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * Distils the account status down to whether not it is in a valid state.
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.IsAccountStatusValid
     */
    isAccountStatusValid: {
      name: "IsAccountStatusValid",
      I: IsAccountStatusValidRequest,
      O: IsAccountStatusValidResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * Returns a new checkout session for the account to subscribe
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetAccountBillingCheckoutSession
     */
    getAccountBillingCheckoutSession: {
      name: "GetAccountBillingCheckoutSession",
      I: GetAccountBillingCheckoutSessionRequest,
      O: GetAccountBillingCheckoutSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a new billing portal session if the account has a billing customer id
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetAccountBillingPortalSession
     */
    getAccountBillingPortalSession: {
      name: "GetAccountBillingPortalSession",
      I: GetAccountBillingPortalSessionRequest,
      O: GetAccountBillingPortalSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns user accounts that have a billing id.
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.GetBillingAccounts
     */
    getBillingAccounts: {
      name: "GetBillingAccounts",
      I: GetBillingAccountsRequest,
      O: GetBillingAccountsResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * Sends a new metered event to the billing system
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetBillingMeterEvent
     */
    setBillingMeterEvent: {
      name: "SetBillingMeterEvent",
      I: SetBillingMeterEventRequest,
      O: SetBillingMeterEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sets the users role
     *
     * @generated from rpc mgmt.v1alpha1.UserAccountService.SetUserRole
     */
    setUserRole: {
      name: "SetUserRole",
      I: SetUserRoleRequest,
      O: SetUserRoleResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

