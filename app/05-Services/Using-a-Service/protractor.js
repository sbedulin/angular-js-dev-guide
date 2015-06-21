describe('my app', function() {

    beforeEach(function() {
        browser.get('05-services/using-a-service/index.html');
    });

    it( 'should test service', function () {
        expect( element( by.id( 'simple' ) ).element( by.model( 'message' ) ).getAttribute( 'value' ) )
            .toEqual( 'test' );
    } );

});