package JavaMockito.src;
import static org.junit.Asserts.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.Arrays;
import java.util.List;
import org.junit.Test;

public class NegocioMock{

    @Test
    public void PruebasConMockito(){

        Servicio Servicio = mock(Servicio.class);

        List<String> listaCombinada = Arrays.asList(
            "Juan ,Panamá",
            "Ana, Nicaragua",
            "Raúl, Costa Rica");

        when(Servicio.getTodos("usuarios")).thenReturn(listaCombinada);
        
        Negocios negocios = new Negocios(Servicio);

        List<String> listPaises = negocios.getTodosUsuarios("usuarios");

        System.out.println(listPaises);
        assertEquals(1, listPaises.size());
    }
}
