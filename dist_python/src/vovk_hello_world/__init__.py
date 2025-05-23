
# auto-generated 2025-05-23T20:23:13.945Z
from __future__ import annotations
from typing import Any, Dict, List, Literal, Optional, Set, TypedDict, Union, Tuple, Generator # type: ignore
from .api_client import ApiClient, HttpException

HttpException = HttpException

client = ApiClient('http://localhost:3000/api')
 
class OpenApiRPC: 
    # OpenApiRPC.get_spec GET `http://localhost:3000/api/static/openapi/spec.json`

    @staticmethod
    def get_spec(

        headers: Optional[Dict[str, str]] = None,
        api_root: Optional[str] = None,
        disable_client_validation: bool = False
    ) -> Any:
        """ 
        OpenAPI spec
        Description: Get the OpenAPI spec for the &#34;Hello World&#34; app API
        """
        return client.request( # type: ignore
            segment_name='static',
            rpc_name='OpenApiRPC',
            handler_name='getSpec',

            headers=headers,
            api_root=api_root,
            disable_client_validation=disable_client_validation
        )
        
    
 
class UserRPC: 
    # UserRPC.update_user POST `http://localhost:3000/api/users/:id`
    class __UpdateUserBody_profile(TypedDict):
        """
        User profile object
        """
        name: str
        age: int
    class UpdateUserBody(TypedDict):
        """
        User data object
        """
        email: str
        profile: UserRPC.__UpdateUserBody_profile
    class UpdateUserQuery(TypedDict):
        """
        Query parameters
        """
        notify: Literal["email", "push", "none"]
    class UpdateUserParams(TypedDict):
        """
        Path parameters
        """
        id: str
    class UpdateUserOutput(TypedDict):
        """
        Response object
        """
        success: bool
    @staticmethod
    def update_user(
        body: UpdateUserBody,
        query: UpdateUserQuery,
        params: UpdateUserParams,
        headers: Optional[Dict[str, str]] = None,
        api_root: Optional[str] = None,
        disable_client_validation: bool = False
    ) -> UpdateUserOutput:
        """ 
        Update user
        Description: Update user by ID
        Body: User data object
        Query: Query parameters
        Returns: Response object
        """
        return client.request( # type: ignore
            segment_name='',
            rpc_name='UserRPC',
            handler_name='updateUser',
            body=body,
            query=query,
            params=params,
            headers=headers,
            api_root=api_root,
            disable_client_validation=disable_client_validation
        )
        
    

