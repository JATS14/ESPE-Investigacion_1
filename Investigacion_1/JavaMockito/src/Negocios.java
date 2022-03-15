package JavaMockito.src;
import java.util.ArrayList;
import java.util.List;

public class Negocios {
    
    public Servicio Servicio;

    public Negocios(Servicio Servicio){
        this.Servicio = Servicio;
    }

    public List<String> getTodosUsuarios(String usuario){
        List<String> listaUsuarios = new ArrayList<String>();
        List<String> listaCombinada = Servicio.getTodos(usuario);

        for (String nombre: listaCombinada){
            if (nombre.contains("Costa Rica")){
                listaUsuarios.add(usuario);
            }
        }

        return listaUsuarios;
    }
}

